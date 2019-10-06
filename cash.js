
/**
 * nb Of Ten cash
 * 
 */
const ten = ( cash ) => {

  let resultTen = 0 ;
  let restTen = 0 ;
  let resultFive = 0 ;
  let restFive = 0 ;
  let resultTwo  = 0 ;
  let restTwo = 0 ;

if( Math.trunc((cash / 10)) >= 0 ){
  resultTen = Math.trunc((cash / 10)) ;
  restTen = (cash % 10) ;
  if( restTen > 0 ){
    if( Math.trunc((restTen / 5)) >= 0 ){
        resultFive = Math.trunc((restTen / 5)) ;
        restFive = (restTen % 5) ;
        if( restFive > 0 ){
            resultTwo = Math.trunc((restFive / 2)) ;
            restTwo = (restFive % 2) ;
        }
  }
}

}

if( restTwo > 0 )
  return false ;

return {ten: resultTen, five: resultFive, two: resultTwo} ;
}



/**
 * nb Of Five cash
 * 
 */
const five = ( cash ) => {

  let resultFive = 0 ;
  let restFive = 0 ;
  let resultTwo  = 0 ;
  let restTwo = 0 ;
if( Math.trunc((cash / 5)) >= 0 ){
  resultFive = Math.trunc((cash / 5)) ;
  restFive = (cash % 5) ;
  if( restFive > 0 ){
    if( Math.trunc((restFive / 2)) >= 0 ){
        resultTwo = Math.trunc((restFive / 2)) ;
        restTwo = (restFive % 2) ;
  }
}

}

if( restTwo > 0 )
  return false ;

return {ten: 0, five: resultFive, two: resultTwo} ;
}


/**
 * nb Of Two cash
 * 
 */
const two = ( cash ) => {

  let resultTwo  = 0 ;
  let restTwo = 0 ;

if( Math.trunc((cash / 2)) >= 0 ){
  resultTwo = Math.trunc((cash / 2)) ;
  restTwo = (cash % 2) ;
}
if( restTwo > 0 )
  return false ;

return {ten: 0, five: 0, two: resultTwo} ;
}

/**
 * defaultCase
 *
 * Eg: 13 or 23 etc .. 
 */
const defaultCase = ( cash ) => {

  let resultFive = 0 ;
  let restFive = 0 ;
  let counter  = 0 ;
  let restTwo = 0 ;
while( true ){

      counter++ ;
      cash = cash - 2 ;

      if( ten(cash) !== false ){
        let res = ten(cash) ;
        res.two = counter + res.two ;
        return res ;
      }
  }
}


const checkAll = ( cash ) => {

  if( ten(cash) !== false ){
    return ten(cash) ;
  }
  if( five(cash) !== false ){
    return five(cash) ;
  }
  if( two(cash) !== false ){
    return two(cash) ;
  }

  return defaultCase(cash) ;

};



console.log(checkAll(23));
