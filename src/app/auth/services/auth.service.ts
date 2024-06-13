import { Injectable } from "@angular/core";
import { CredentialsDto } from "../dto/credentials.dto";
import { LoginResponseDto } from "../dto/login-response.dto";
import { HttpClient } from "@angular/common/http";
import { API } from "../../../config/api.config";
import { BehaviorSubject, map, Observable, Subject, tap } from "rxjs";

export class ConnectedUser {
  constructor(public id = 0, public email = "") {}
}
@Injectable({
  providedIn: "root",
})
export class AuthService {
  /**
   * Notifier toute personne interessé par le user authentifié
   */
  userSubject$: BehaviorSubject<ConnectedUser | null> =
    new BehaviorSubject<ConnectedUser | null>(null);
  isLoggedIn$: Observable<boolean> = this.userSubject$.pipe(
    map((user) => !!user)
  );
  isLoggedOut$: Observable<boolean> = this.userSubject$.pipe(
    map((user) => !user)
  );
  constructor(private http: HttpClient) {
    const user = localStorage.getItem("connectedUser");
    if (user) {
      this.userSubject$.next(JSON.parse(user));
    }
  }

  login(credentials: CredentialsDto): Observable<LoginResponseDto> {
    return this.http.post<LoginResponseDto>(API.login, credentials).pipe(
      tap((loginResponse) => {
        const user = new ConnectedUser(loginResponse.userId, credentials.email);
        localStorage.setItem("connectedUser", JSON.stringify(user));
        this.userSubject$.next(user);
      })
    );
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem("token");
  }

  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("connectedUser");
    this.userSubject$.next(null);
  }
}
