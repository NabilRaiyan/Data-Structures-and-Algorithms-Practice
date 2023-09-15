let counter = 0;
// for BFS and DFS recurtion is the best option and also for trees
function inception(){
    if (counter > 3){
        return 'done';
    }else{
        counter++;
        return inception();
    }
}

inception();

