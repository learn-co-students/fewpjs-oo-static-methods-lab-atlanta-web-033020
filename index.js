class Formatter {

  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace( /[^a-z0-9 '-]/gi, '' )
  }

  static titleize(string) {
    let exceptions = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]
    let sentAry = []
    let arrayOfWords = string.split( " " )
    console.log(sentAry)
    for ( let n = 0; n < arrayOfWords.length; n++ ) {
      if ( n == 0 ) {
        sentAry.push( this.capitalize( arrayOfWords[ n ] ) )
      } else {
        if ( exceptions.includes( arrayOfWords[ n ] ) ) {
          sentAry.push( arrayOfWords[ n ] )
        } else {
          sentAry.push( this.capitalize( arrayOfWords[ n ] ) )
        }
      }

    }
    return sentAry.join( " " );
  }
}