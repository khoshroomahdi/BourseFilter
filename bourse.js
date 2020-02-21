//سرانه خرید حقیق
SaranehKharid=Math.round((((pc)*(ct).Buy_I_Volume)/(ct).Buy_CountI)/1000000)

//سرانه فروش حقیقی
SaranehForoush=Math.round((((pc)*(ct).Sell_I_Volume)/(ct).Sell_CountI)/1000000)

//نسبت خرید به فروش
KharidBeForoush=Math.round((a)/(b)*100)/100

//تعداد خریدارحقیقی
TedadKharidar=(ct).Buy_CountI

//تعداد فروشنده حقیقی
TedadForoushandeh=(ct).Sell_CountI

//نسبت حجم به حجم 10 روز
var VolumeOf10Days=function()

{

var V10D=[ih][0].QTotTran5J;

var n;

for(n=1; n<9; n++)

   V10D=(V10D+[ih][n].QTotTran5J)/2;

return V10D;

};
NesbatVolume10=Math.round((tvol)/(VolumeOf10Days)*100)/100

//نسبت حجم به حجم 30 روز
var VolumeOf30Days=function()

{

var V30D=[ih][0].QTotTran5J;

var n;

for(n=1; n<29; n++)

   V30D=(V30D+[ih][n].QTotTran5J)/2;

return V30D;

};
NesbatVolume30=Math.round((tvol)/(VolumeOf30Days)*100)/100

//TODO بازنویسی شود
//قیمت امروز به موزون 10 روزه
GheymatbeMozon10=Math.round(((pc)/(([ih][0].PClosing*[ih][0].QTotTran5J+[ih][1].PClosing*[ih][1].QTotTran5J+[ih][2].PClosing*[ih][2].QTotTran5J+[ih][3].PClosing*[ih][3].QTotTran5J+[ih][4].PClosing*[ih][4].QTotTran5J+[ih][5].PClosing*[ih][5].QTotTran5J+[ih][6].PClosing*[ih][6].QTotTran5J+[ih][7].PClosing*[ih][7].QTotTran5J+[ih][8].PClosing*[ih][8].QTotTran5J+[ih][9].PClosing*[ih][9].QTotTran5J)/([ih][0].QTotTran5J+[ih][1].QTotTran5J+[ih][2].QTotTran5J+[ih][3].QTotTran5J+[ih][4].QTotTran5J+[ih][5].QTotTran5J+[ih][6].QTotTran5J+[ih][7].QTotTran5J+[ih][8].QTotTran5J+[ih][9].QTotTran5J)))*100)/100

//RSI
true==function()
{

   var CalculateRSI =function(period){

      var len=20;

      for (var i = 0; i < len ; i++) {
         var rec=[ih][len-1-i];

         var change=rec.PClosing-rec.PriceYesterday;         

         if (change> 0) {
        rec.gain=change;
                rec.loss=0;
         }
         else
         {
        rec.gain=0;
                rec.loss=-change;
         }
      }

      // Calculate first "average gain" and "average loss"
      var gainSum=0;
      var lossSum=0;

      for (var i = 0; i < period; i++) {
         var rec=[ih][len-1-i];
     gainSum += rec.gain;
     lossSum += rec.loss;
      }

      var averageGain=gainSum /period;
      var averageLoss=lossSum / period;

      // Calculate subsequent "average gain" and "average loss" values
      for (var i = period + 1; i < len; i++) {
         var rec=[ih][len-1-i];

         averageGain=(averageGain* (period - 1) + rec.gain) / period;
         averageLoss=(averageLoss* (period - 1) + rec. loss)/  period;

         rec.averageGain=averageGain;
         rec.averageLoss=averageLoss;
      }

      // Calculate RSI
      var RS = 0; // Relative strength
      var RSIndex = 0; // Relative strength index
        
      for (var i = period + 1; i < len; i++) {
         var rec=[ih][len-1-i];

         RS = rec.averageGain/ rec.averageLoss;
     RSIndex = 100 - 100 / (1 + RS);
     rec.rsi=RSIndex;
      }
   };

      if(typeof [ih][0].rsi=="undefined")  
        CalculateRSI(14);
        return true;       

}()

//Stochastic
true==function()
{
	function Stochastic(start,day){
		var min_min=10000000;
		var max_max=0;
		for(var i=start;i<day;i++){
			var namad=[ih][i];
			if(namad.PriceMin<min_min){
				min_min=namad.PriceMin;
			}
			if(namad.PriceMax>max_max){
				max_max=namad.PriceMax;
			}
		}
		var result=([ih][start].PClosing-min_min)*100/(max_max-min_min);
		return result.toFixed(2);
	}
	
	//(cfield0)=Stochastic(0,14);
	
	return true;

}()


