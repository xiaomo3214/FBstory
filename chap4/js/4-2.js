var i = j = 0;
var char = [['A0_0','A0_1','A0_2','A0_3','A0_4','A0_5','A0_6','A0_7','A0_8','A0_9','A0_10'],
            ['A1_0','A1_1','A1_2','A1_3','A1_4','A1_5','A1_6','A1_7','A1_8','A1_9','A1_10'],
            ['A2_0','A2_1','A2_2','A2_3','A2_4','A2_5','A2_6','A2_7','A2_8','A2_9','A2_10'],
            ['A3_0','A3_1','A3_2','A3_3','A3_4','A3_5','A3_6','A3_7','A3_8','A3_9','A3_10'],
            ['A4_0','A4_1','A4_2','A4_3','A4_4','A4_5','A4_6','A4_7','A4_8','A4_9','A4_10'],
            ['A5_0','A5_1','A5_2','A5_3','A5_4','A5_5','A5_6','A5_7','A5_8','A5_9','A5_10']];

function scan(word){
    if(j>10) {
        i++;
        if(i>5 && j>10){
            for(var a=0; a<6 ;a++){
                for(var b =0;b<11;b++){
                    document.getElementById(char[a][b]).style.display = "none";
                }
            }
            i=0;j=0;
        }
        j=0;
    }
    document.getElementById(char[i][j]).src = word;
    document.getElementById(char[i][j]).style.display = "block";
    j++;
}
function del(){
    if(j==0){
        if(i>0){
            i--;
            j=10;
        }
        document.getElementById(char[i][j]).style.display = "none";
    }
    else {
        j--;
        document.getElementById(char[i][j]).style.display = "none";
    }
}
function space(){
    if(j>10) {
        i++;
        if(i>5 && j>10){
            for(var a=0; a<6 ;a++){
                for(var b =0;b<11;b++){
                    document.getElementById(char[a][b]).style.display = "none";
                }
            }
            i=0;j=0;
        }
        j=0;
    }
    j++;
}