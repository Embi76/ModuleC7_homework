context ( 'Получить вики' ,  ( )  =>  {
    beforeEach ( ( )  =>  {
      cy . посетите ( 'https://ru.wikipedia.org/wiki/%D0%A2%D0%B5%D1%81%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0% B0% D0% BD% D0% B8% D0% B5_% D0% BF% D1% 80% D0% BE% D0% B3% D1% 80% D0% B0% D0% BC% D0% BC% D0% BD% D0% BE% D0% B3% D0% BE_% D0% BE% D0% B1% D0% B5% D1% 81% D0% BF% D0% B5% D1% 87% D0% B5% D0% BD% D0% B8% D1% 8F ' )
    } )
  
    it ( 'пример' ,  ( )  =>  {
      cy . получить ( '#firstHeading' ) . then ( data  =>  {
        const  header  =  data [ 0 ]
  
        консоль . журнал ( заголовок )
        ожидать ( данные [ 0 ] . innerText ) . к . глубокий . eq ( "Тестирование программного обеспечения" )
      } )
    } )
  } )
