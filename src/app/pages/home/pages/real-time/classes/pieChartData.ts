/**
 * 圆环图的数据类
 */
export class pieChartData{
    title: string ;
    topNumber: string;
    bomNumber: string;
    isRed : boolean;
    
    // 圆环图的标题、上下数字、是否显示红色
    constructor(title: string,tN: string,bN: string,red:boolean){
      this.title = title;
      this.topNumber = tN;
      this.bomNumber = bN;
      this.isRed = red;
    }


    /**
   * 将传进来的数字转成对应的格式
   * @param tempTar 
   * @param tempPro 
   */
  public static formatNumber(title:string,tempTar:number,tempPro:number): {title:string,top:string,bom:string,red:boolean} {

    var strTar:string;
    var strPro:string;

    // 修改传入数据格式
    // 乘上100，首位数字还是0的话直接显示0
    if((tempTar*100).toPrecision(4).charAt(0) == '0'){
      strTar = '0%';
    }
    if((tempPro*100).toPrecision(4).charAt(0) == '0'){
      strPro = '0%';
    }
    
    // 个位数字不为0，且百分比超过100%，或百分比取四位无小数点的，直接显示如 1.32
    if((tempTar*100).toPrecision(4).indexOf('.') > 2  || (tempTar*100).toPrecision(4).indexOf('.') == -1){
      strTar = tempTar.toPrecision(3)  ;

    }
    if((tempPro*100).toPrecision(4).indexOf('.') > 2  || (tempPro*100).toPrecision(4).indexOf('.') == -1){
      strPro = tempPro.toPrecision(3) ;

    }
    
    // 百分比的情况
    if(strTar == undefined){
      if((tempTar*100).toPrecision(4).indexOf('.') == 1){
        strTar = (tempTar*100).toPrecision(3)+'%';
      }else if((tempTar*100).toPrecision(4).indexOf('.') == 2){
        strTar = (tempTar*100).toPrecision(4)+'%';
      }
      

    }
    if(strPro == undefined){
      strPro = (tempPro*100).toPrecision(4)+ '%';
    }
      
    console.log("format tar:",strTar);
    console.log("format pro:",strPro);
    console.log('format color:',(tempTar>tempPro)?true:false);

    // 返回上下数字和是否为红色的对象
    return {title,top:strTar,bom:strPro,red:(tempTar>tempPro)?true:false};



  }
  
  }