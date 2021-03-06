﻿// conversion.js By Aidan Wilson 2018/08/01
//The main conversion logic for turning input into Japanese



//converts the txt to hiragana
function convertToHiragana(text) {
    var temp = '';
    var left = 0;
    for (i = 0; i < text.length; i++) {
        left = text.length - i - 1;


        if (left >= 1) {
            //ka ki ku ke ko kya kyo kyu
            if (text[i] == 'k') {
                if (text[i + 1] == 'k') { //small tsu
                    temp = temp + '\u3063';
                    continue;
                } else if (text[i + 1] == 'a') {//ka
                    temp = temp + '\u304B';
                    i++;
                    continue;
                } else if (text[i + 1] == 'i') {//ki
                    temp = temp + '\u304D';
                    i++;
                    continue;
                } else if (text[i + 1] == 'u') {//ku
                    temp = temp + '\u304F';
                    i++;
                    continue;
                } else if (text[i + 1] == 'e') {//ke
                    temp = temp + '\u3051';
                    i++;
                    continue;
                } else if (text[i + 1] == 'o') {//ko
                    temp = temp + '\u3053';
                    i++;
                    continue;
                } else if (text[i + 1] == 'y') { //sha shu sho
                    if (left >= 2 && text[i + 2] == 'a') {
                        temp = temp + '\u304D' + '\u3083';
                        i = i + 2;
                        continue;
                    } else if (left >= 2 && text[i + 2] == 'u') {
                        temp = temp + '\u304D' + '\u3085';
                        i = i + 2;
                        continue;
                    } else if (left >= 2 && text[i + 2] == 'o') {
                        temp = temp + '\u304D' + '\u3087';
                        i = i + 2;
                        continue;
                    }
                }
            }
            //sa shi su se so
            else if (text[i] == 's') {
                if (text[i + 1] == 's') {
                    temp = temp + '\u3063';
                    continue;
                } else if (text[i + 1] == 'a') { //sa
                    temp = temp + '\u3055';
                    i++;
                    continue;
                } else if (text[i + 1] == 'h') { //shi sha shu sho
                    if (left >= 2 && text[i + 2] == 'i') {
                        temp = temp + '\u3057';
                        i++;
                        i++;
                        continue;
                    } else if (left >= 2 && text[i + 2] == 'a') {
                        temp = temp + '\u3057' + '\u3083';
                        i = i + 2;
                        continue;
                    } else if (left >= 2 && text[i + 2] == 'u') {
                        temp = temp + '\u3057' + '\u3085';
                        i = i + 2;
                        continue;
                    } else if (left >= 2 && text[i + 2] == 'o') {
                        temp = temp + '\u3057' + '\u3087';
                        i = i + 2;
                        continue;
                    }
                } else if (text[i + 1] == 'u') { //su
                    temp = temp + '\u3059';
                    i++;
                    continue;
                } else if (text[i + 1] == 'e') { //se
                    temp = temp + '\u305B';
                    i++;
                    continue;
                } else if (text[i + 1] == 'o') { //so
                    temp = temp + '\u305D';
                    i++;
                    continue;
                }
            }
            //na ni nu ne no nya nyu nyo n
            else if (text[i] == 'n') {
                if (text[i + 1] == 'n') { //n
                    temp = temp + '\u3093';
                    continue;
                } else if (text[i + 1] == ' ') { //n
                    temp = temp + '\u3093';
                    i++;
                    continue;
                } else if (text[i + 1] == '\n') { //n
                    temp = temp + '\u3093' + '\n';
                    i++;
                    continue;
                } else if (text[i + 1] == 'a') { //na
                    temp = temp + '\u306A';
                    i++;
                    continue;
                } else if (text[i + 1] == 'i') { //ni
                    temp = temp + '\u306B';
                    i++;
                    continue;
                } else if (text[i + 1] == 'u') { //nu
                    temp = temp + '\u306C';
                    i++;
                    continue;
                } else if (text[i + 1] == 'e') { //ne
                    temp = temp + '\u306D';
                    i++;
                    continue;
                } else if (text[i + 1] == 'o') { //no
                    temp = temp + '\u306E';
                    i++;
                    continue;
                } else if (text[i + 1] == 'y') { //nya nyu nyo
                    if (left >= 2 && text[i + 2] == 'a') {
                        temp = temp + '\u306B' + '\u3083';
                        i = i + 2;
                        continue;
                    } else if (left >= 2 && text[i + 2] == 'u') {
                        temp = temp + '\u306B' + '\u3085';
                        i = i + 2;
                        continue;
                    } else if (left >= 2 && text[i + 2] == 'o') {
                        temp = temp + '\u306B' + '\u3087';
                        i = i + 2;
                        continue;
                    }
                } else {//n
                    temp = temp + '\u3093';
                    continue;
                }
            }
            //ta tsu te to 
            else if (text[i] == 't') {
                if (text[i + 1] == 't') { //small tsu
                    temp = temp + '\u3063';
                    continue;
                } else if (text[i + 1] == 'a') { //ta
                    temp = temp + '\u305F';
                    i++;
                    continue;
                } else if (text[i + 1] == 's') { //tsu
                    if (left >= 2 && text[i + 2] == 'u') {
                        temp = temp + '\u3064';
                        i = i + 2;
                        continue;
                    }
                } else if (text[i + 1] == 'e') { //te
                    temp = temp + '\u3066';
                    i++;
                    continue;
                } else if (text[i + 1] == 'o') { //to
                    temp = temp + '\u3068';
                    i++;
                    continue;
                }
            }
            //chi cha chu cho
            else if (text[i] == 'c') {
                if (text[i + 1] == 'c') { //small tsu
                    temp = temp + '\u3063';
                    continue;
                } else if (left >= 2 && text[i + 1] == 'h') {
                    if (text[i + 2] == 'i') { //chi
                        temp = temp + '\u3061';
                        i = i + 2;
                        continue;
                    } else if (text[i + 2] == 'a') { //cha
                        temp = temp + '\u3061' + '\u3083';
                        i = i + 2;
                        continue;
                    } else if (text[i + 2] == 'u') { //chu
                        temp = temp + '\u3061' + '\u3085';
                        i = i + 2;
                        continue;
                    } else if (text[i + 2] == 'o') { //cho
                        temp = temp + '\u3061' + '\u3087';
                        i = i + 2;
                        continue;
                    }
                }
            }
            else if (text[i] == 'f') {
                if (text[i + 1] == 'u') {
                    temp = temp + '\u3075';
                    i++;
                    continue;
                }
            }
            //ha hi hu he ho hya hyu hyo
            else if (text[i] == 'h') {
                if (text[i + 1] == 'h') { //small tsu
                    temp = temp + '\u3063';
                    continue;
                } else if (text[i + 1] == 'a') {//ha
                    temp = temp + '\u306F';
                    i++;
                    continue;
                } else if (text[i + 1] == 'i') {//hi
                    temp = temp + '\u3072';
                    i++;
                    continue;
                } else if (text[i + 1] == 'u') {//fu
                    temp = temp + '\u3075';
                    i++;
                    continue;
                } else if (text[i + 1] == 'e') {//he
                    temp = temp + '\u3078';
                    i++;
                    continue;
                } else if (text[i + 1] == 'o') {//ho
                    temp = temp + '\u307B';
                    i++;
                    continue;
                } else if (text[i + 1] == 'y') { //hya hyu hyo
                    if (left >= 2 && text[i + 2] == 'a') {
                        temp = temp + '\u3072' + '\u3083';
                        i = i + 2;
                        continue;
                    } else if (left >= 2 && text[i + 2] == 'u') {
                        temp = temp + '\u3072' + '\u3085';
                        i = i + 2;
                        continue;
                    } else if (left >= 2 && text[i + 2] == 'o') {
                        temp = temp + '\u3072' + '\u3087';
                        i = i + 2;
                        continue;
                    }
                }
            }
            //ra ri ru re ro
            else if (text[i] == 'r') {
                if (text[i + 1] == 'r') { //small tsu
                    temp = temp + '\u3063';
                    continue;
                } else if (text[i + 1] == 'a') {//ra
                    temp = temp + '\u3089';
                    i++;
                    continue;
                } else if (text[i + 1] == 'i') {//ri
                    temp = temp + '\u308A';
                    i++;
                    continue;
                } else if (text[i + 1] == 'u') {//ru
                    temp = temp + '\u308B';
                    i++;
                    continue;
                } else if (text[i + 1] == 'e') {//re
                    temp = temp + '\u308C';
                    i++;
                    continue;
                } else if (text[i + 1] == 'o') {//ro
                    temp = temp + '\u308D';
                    i++;
                    continue;
                } else if (text[i + 1] == 'y') { //rya ryu ryo
                    if (left >= 2 && text[i + 2] == 'a') {
                        temp = temp + '\u308A' + '\u3083';
                        i = i + 2;
                        continue;
                    } else if (left >= 2 && text[i + 2] == 'u') {
                        temp = temp + '\u308A' + '\u3085';
                        i = i + 2;
                        continue;
                    } else if (left >= 2 && text[i + 2] == 'o') {
                        temp = temp + '\u308A' + '\u3087';
                        i = i + 2;
                        continue;
                    }
                }
            }
            //ma mi mu me mo
            else if (text[i] == 'm') {
                if (text[i + 1] == 'm') { //small tsu
                    temp = temp + '\u3063';
                    continue;
                } else if (text[i + 1] == 'a') {//ma
                    temp = temp + '\u307E';
                    i++;
                    continue;
                } else if (text[i + 1] == 'i') {//mi
                    temp = temp + '\u307F';
                    i++;
                    continue;
                } else if (text[i + 1] == 'u') {//mu
                    temp = temp + '\u3080';
                    i++;
                    continue;
                } else if (text[i + 1] == 'e') {//me
                    temp = temp + '\u3081';
                    i++;
                    continue;
                } else if (text[i + 1] == 'o') {//mo
                    temp = temp + '\u3082';
                    i++;
                    continue;
                } else if (text[i + 1] == 'y') { //mya myu myo
                    if (left >= 2 && text[i + 2] == 'a') {
                        temp = temp + '\u307F' + '\u3083';
                        i = i + 2;
                        continue;
                    } else if (left >= 2 && text[i + 2] == 'u') {
                        temp = temp + '\u307F' + '\u3085';
                        i = i + 2;
                        continue;
                    } else if (left >= 2 && text[i + 2] == 'o') {
                        temp = temp + '\u307F' + '\u3087';
                        i = i + 2;
                        continue;
                    }
                }
            }
            //ga gi gu ge go
            else if (text[i] == 'g') {
                if (text[i + 1] == 'g') { //small tsu
                    temp = temp + '\u3063';
                    continue;
                } else if (text[i + 1] == 'a') {//ga
                    temp = temp + '\u304C';
                    i++;
                    continue;
                } else if (text[i + 1] == 'i') {//gi
                    temp = temp + '\u304E';
                    i++;
                    continue;
                } else if (text[i + 1] == 'u') {//gu
                    temp = temp + '\u3050';
                    i++;
                    continue;
                } else if (text[i + 1] == 'e') {//ge
                    temp = temp + '\u3052';
                    i++;
                    continue;
                } else if (text[i + 1] == 'o') {//go
                    temp = temp + '\u3054';
                    i++;
                    continue;
                } else if (text[i + 1] == 'y') { //gya gyu gyo
                    if (left >= 2 && text[i + 2] == 'a') {
                        temp = temp + '\u304C' + '\u3083';
                        i = i + 2;
                        continue;
                    } else if (left >= 2 && text[i + 2] == 'u') {
                        temp = temp + '\u304C' + '\u3085';
                        i = i + 2;
                        continue;
                    } else if (left >= 2 && text[i + 2] == 'o') {
                        temp = temp + '\u304C' + '\u3087';
                        i = i + 2;
                        continue;
                    }
                }
            }
            //za zu ze zo
            //not done
            else if (text[i] == 'z') {
                if (text[i + 1] == 'z') { //small tsu
                    temp = temp + '\u3063';
                    continue;
                } else if (text[i + 1] == 'a') {//za
                    temp = temp + '\u3056';
                    i++;
                    continue;
                } else if (text[i + 1] == 'u') {//zu
                    temp = temp + '\u305A';
                    i++;
                    continue;
                } else if (text[i + 1] == 'e') {//ze
                    temp = temp + '\u305C';
                    i++;
                    continue;
                } else if (text[i + 1] == 'o') {//zo
                    temp = temp + '\u305E';
                    i++;
                    continue;
                }
            }
            //da de do
            else if (text[i] == 'd') {
                if (text[i + 1] == 'd') { //small tsu
                    temp = temp + '\u3063';
                    continue;
                } else if (text[i + 1] == 'a') {//da
                    temp = temp + '\u3060';
                    i++;
                    continue;
                } else if (text[i + 1] == 'e') {//de
                    temp = temp + '\u3067';
                    i++;
                    continue;
                } else if (text[i + 1] == 'o') {//do
                    temp = temp + '\u3069';
                    i++;
                    continue;
                }
            }
            //ji ja ju jo
            else if (text[i] == 'j') {
                if (text[i + 1] == 'j') { //small tsu
                    temp = temp + '\u3063';
                    continue;
                } else if (text[i + 1] == 'i') {//ji
                    temp = temp + '\u3056';
                    i++;
                    continue;
                } else if (text[i + 1] == 'a') {//ja
                    temp = temp + '\u3058' + '\u3083';
                    i = i + 2;
                    continue;
                } else if (text[i + 1] == 'u') {//ju
                    temp = temp + '\u3058' + '\u3085';
                    i = i + 2;
                    continue;
                } else if (text[i + 1] == 'o') {//jo
                    temp = temp + '\u3058' + '\u3087';
                    i = i + 2;
                    continue;
                }
            }
            //ba bi bu be bo
            else if (text[i] == 'b') {
                if (text[i + 1] == 'b') { //small tsu
                    temp = temp + '\u3063';
                    continue;
                } else if (text[i + 1] == 'a') {//ba
                    temp = temp + '\u3070';
                    i++;
                    continue;
                } else if (text[i + 1] == 'i') {//bi
                    temp = temp + '\u3073';
                    i++;
                    continue;
                } else if (text[i + 1] == 'u') {//bu
                    temp = temp + '\u3076';
                    i++;
                    continue;
                } else if (text[i + 1] == 'e') {//be
                    temp = temp + '\u3079';
                    i++;
                    continue;
                } else if (text[i + 1] == 'o') {//bo
                    temp = temp + '\u307C';
                    i++;
                    continue;
                } else if (text[i + 1] == 'y') { //bya byu byo
                    if (left >= 2 && text[i + 2] == 'a') {
                        temp = temp + '\u3073' + '\u3083';
                        i = i + 2;
                        continue;
                    } else if (left >= 2 && text[i + 2] == 'u') {
                        temp = temp + '\u3073' + '\u3085';
                        i = i + 2;
                        continue;
                    } else if (left >= 2 && text[i + 2] == 'o') {
                        temp = temp + '\u3073' + '\u3087';
                        i = i + 2;
                        continue;
                    }
                }
            }
            //pa pi pu pe po
            else if (text[i] == 'p') {
                if (text[i + 1] == 'p') { //small tsu
                    temp = temp + '\u3063';
                    continue;
                } else if (text[i + 1] == 'a') {//pa
                    temp = temp + '\u3071';
                    i++;
                    continue;
                } else if (text[i + 1] == 'i') {//pi
                    temp = temp + '\u3074';
                    i++;
                    continue;
                } else if (text[i + 1] == 'u') {//pu
                    temp = temp + '\u3077';
                    i++;
                    continue;
                } else if (text[i + 1] == 'e') {//pe
                    temp = temp + '\u307A';
                    i++;
                    continue;
                } else if (text[i + 1] == 'o') {//po
                    temp = temp + '\u307D';
                    i++;
                    continue;
                } else if (text[i + 1] == 'y') { //pya pyu pyo
                    if (left >= 2 && text[i + 2] == 'a') {
                        temp = temp + '\u3074' + '\u3083';
                        i = i + 2;
                        continue;
                    } else if (left >= 2 && text[i + 2] == 'u') {
                        temp = temp + '\u3074' + '\u3085';
                        i = i + 2;
                        continue;
                    } else if (left >= 2 && text[i + 2] == 'o') {
                        temp = temp + '\u3074' + '\u3087';
                        i = i + 2;
                        continue;
                    }
                }
            }
            //ya yu yo
            else if (text[i] == 'y') {
                if (text[i + 1] == 'y') { //small tsu
                    temp = temp + '\u3063';
                    continue;
                } else if (text[i + 1] == 'a') { //ya
                    temp = temp + '\u3084';
                    i++;
                    continue;
                } else if (text[i + 1] == 'u') { //yu
                    temp = temp + '\u3086';
                    i++;
                    continue;
                } else if (text[i + 1] == 'o') { //yo
                    temp = temp + '\u3088';
                    i++;
                    continue;
                }
            }
            //wa wo
            else if (text[i] == 'w') {
                if (text[i + 1] == 'w') { //small tsu
                    temp = temp + '\u3063';
                    continue;
                } else if (text[i + 1] == 'a') { //wa
                    temp = temp + '\u308F';
                    i++;
                    continue;
                } else if (text[i + 1] == 'o') { //wo
                    temp = temp + '\u3092';
                    i++;
                    continue;
                }
            }
        }

        //a i u e o
        if (text[i] == 'a') {
            temp = temp + '\u3042';
            continue;
        } else if (text[i] == 'i') {
            temp = temp + '\u3044';
            continue;
        } else if (text[i] == 'u') {
            temp = temp + '\u3046';
            continue;
        } else if (text[i] == 'e') {
            temp = temp + '\u3048';
            continue;
        } else if (text[i] == 'o') {
            temp = temp + '\u304A';
            continue;
        }


        temp = temp + text[i];
    }
    return temp;


}
