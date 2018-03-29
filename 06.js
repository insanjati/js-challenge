let string = 'Aku ingin begini Aku ingin begitu Ingin ini itu banyak sekali Semua semua semua Dapat dikabulkan Dapat dikabulkan Dengan kantong ajaib Aku ingin terbang bebas Di angkasa Hei… baling baling bambu La... la... la... Aku sayang sekali Doraemon La... la... la... Aku sayang sekali'.toLocaleLowerCase().split(' ');

function countWord(word){
    let count = 0;
    for(var i = 0; i < string.length; i++) {
        if(string[i] === word){
            count += 1;
        }
    }
    return count;    
}

console.log('Total words of aku: ' + countWord('aku'));
console.log('Total words of ingin: ' + countWord('ingin'));
console.log('Total words of dapat: ' + countWord('dapat'));