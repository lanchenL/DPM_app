import { pieChartData } from "./pieChartData";

/**
 * 为让detail页面不写重复的代码，建立service接口统一service该有的行为
 */
export interface serviceInterface{

    /* 以下属性和方法只定义了在detail页面会用到的属性或方法 */ 
    // line下拉框 子option 的value值
    line:{data: string}[][];

    // 一开始默认选中的line的value 传给detail页面供line下拉框初始化有全选效果 
    // （值与上个属性line是相同的，但形式不同）
    startLine: string[][];

    // 首页的某个圆环图的信息
    getNumber(index: number): Promise<{ title: string, top: string, bom: string, red: boolean }>;
    
    // detail页面的group圆环的信息
    getGroupNumber(period: string,index:number): Promise<pieChartData[]>

    // detail页面的Entire圆环的信息
    getEntireNumber(line: string[], period: string,index:number): Promise<{ title: string, top: string, bom: string, red: boolean }>;

}