package ie.atu.week5;

public class Counter {
    private int countValue;

    public Counter(){
        countValue = 0;
    }
    public Counter(int startingValue){
        if(startingValue >5){
            countValue = startingValue;
        }
        else
        {
            throw new IllegalArgumentException("This is not a valid number");
        }
    }

    public int increment(){
        countValue++;
        return countValue;
    }
}
