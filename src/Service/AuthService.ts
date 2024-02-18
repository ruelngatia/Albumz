export class AuthService{

    public setLoginToken(token: string){
        console.log(token);
        
      window.sessionStorage.setItem('auth',token);
    }

    public getLoginToken(): String{
       return window.sessionStorage.get('auth');
    }

    public removeLoginToken(){
        window.sessionStorage.removeItem('auth');
    }

    public isLoggedIn(): boolean{
        return window.sessionStorage.getItem('auth')==null? false : true;
    }

}