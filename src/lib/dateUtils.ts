export function parseToDate(num: number) : Date {
    const str = num.toString();
    
    var y = str.substring(0,4),
        m = str.substring(4,6),
        d = str.substring(6,8);
    const y_int : number = +y,
          m_int : number = +m,
          d_int : number = +d;
    
    return new Date(y_int, m_int-1, d_int );
}