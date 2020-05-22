class Formatter {

  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace( /[^a-z0-9 '-]/gi, '' )
  }

  static titleize(string) {
    let sentAry = []
    sentAry = string.split(' ')
    console.log(sentAry)
  }
}