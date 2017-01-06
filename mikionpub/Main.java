import java.util.Scanner;

public class Main{
  public static void main(String[] args){
    Scanner scan = new Scanner(System.in);
    int N = scan.nextInt();
    int mok5 = N / 5;
    int nam5 = N % 5;

    if (N>=3 && N<=5000){
      if(nam5==0){
        System.out.println(mok5);
      }
      else{
        int mok3 = mok5 / 3;
        int nam3 = mok5 % 3;
        if(nam3==0){
          int sum = mok5 + mok3;
          System.out.println(sum);
        }
        else{
          int newmok3 = N / 3;
          int newnam3 = N % 3;
          if(newnam3==0){
            System.out.println(newmok3);
          }
          else
          System.out.println("-1");
        }
      }
    }
  }
}
