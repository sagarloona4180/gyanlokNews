export const APPLICATION_CONSTANT={

}


export const password = {
       value :false
}

export const wheather:any ={
  value:null
}

export class URLs {
    public static getAPIUrl(): string {
      const httpOrigin = window.location.origin;
      let http_origin = '';
      if (httpOrigin.indexOf('local') > 0) {
       
        http_origin = 'http://gyanloknews.in/restAPi';
      } else{
        http_origin = 'http://gyanloknews.in/restAPi';
      }
  
      return http_origin + '/';
    }
    public static deployMode(): string {
      const httpOrigin = window.location.origin.toLowerCase();
  
      if (httpOrigin.indexOf('stage') >= 0 ||
        httpOrigin.indexOf('dev') >= 0 ||
        httpOrigin.indexOf('local') >= 0 ||
        httpOrigin.indexOf('poe') >= 0 ||
        httpOrigin.indexOf('test') > 0 ||
        httpOrigin.indexOf('bat') > 0 ||
        httpOrigin.indexOf('idv') > 0 ||
        httpOrigin.indexOf('coe') >= 0) {
        return 'STAGE';
      } else if (httpOrigin.indexOf('lt') >= 0) {
        return 'LT';
      } else {
        return 'PROD';
      }
    }
  }


  export const Translate ={
    metaDATA:{}
  }



  