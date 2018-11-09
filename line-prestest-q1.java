import java.util.ArrayList;
import java.util.Collections;

public class PreTest {
	
	// ==============================================================================
	//  QUESTION 1 
	//		Where n is a positive integer, the function f(n) satisfies the following.
	//		f(0) = 0
	//		f(1) = 1
	//		f(n) = f(n-1) + f(n-2)
	//
	//		(1) Please create a program to find. (You can write in any language that you are good at.)
	//		(2) What is the result of f(8181).
	//
	//	Author : Wanchalerm Popee
	//==============================================================================
	
	public static String sum(String left, String right) {
		Integer[] arr1 = new Integer[10000];
		Integer[] arr2 = new Integer[10000];

		// Convert String to Array
		char[] lArr = left.toCharArray();
		char[] rArr = right.toCharArray();


		// Swap array if digit of left less than right
		if (lArr.length < rArr.length) {
			char[] temp = rArr;
			rArr = lArr;
			lArr = temp;
		}

		// Initiate digit of left side value to float right on empty array
		for (int i = 0; i < lArr.length; i++) {
			arr1[(arr1.length - 1) - (lArr.length - 1) + i] = Integer.parseInt(String.valueOf(lArr[i]));
		}

		// Initiate digit of right side value to float right on empty array
		for (int i = 0; i < rArr.length; i++) {
			arr2[(arr2.length - 1) - (rArr.length - 1) + i] = Integer.parseInt(String.valueOf(rArr[i]));
		}

		ArrayList<String> output = new ArrayList<String>();
		int carry = 0;

		for (int i = arr1.length - 1; i >= 0; i--) {
			if (String.valueOf(arr1[i]) != "null" || String.valueOf(arr1[i]) == "0") {
				int sum = arr1[i] + (arr2[i] != null ? arr2[i] : 0) + carry;

				// Check is last loop of first input digit or not
				// Example :
				// [null,null,null,2,4,5,6,7]
				// 		- Normally this loop make looping from tail to head like 7,6,5,4,2,...
				// 		- Check is this round working on last digit or not. As 2 of example array
				if (i == arr1.length - lArr.length) {
					// add last digit of sum to output array
					output.add(String.valueOf(sum % 10));

					// adding carry to output array if first digit of sum not equal zero
					if (Math.floor(sum / 10) != 0) {
						output.add(String.valueOf(sum / 10));
					}
				} else {
					output.add(String.valueOf(sum % 10));
					carry = sum / 10;
				}
			}
		}

		Collections.reverse(output);
		StringBuilder outputSb = new StringBuilder();
		for (String s : output) {
			outputSb.append(s);
		}
		return outputSb.toString();
	}

	public static String exeFunc(int n, String left, String right, String summary, int currentInt) throws InterruptedException {
		if (n < 0)
			return "n cannot be negative.";
		summary = (summary == "0" ? String.valueOf(summary) : "");
		summary = sum(left, right);
	
		if (currentInt == n) {
			return summary;
		} else {
			left = right;
			right = summary;
			return exeFunc(n, left, right, summary, currentInt + 1);
		}	
	}

	public static void main(String[] args) throws InterruptedException {
		// To find function of n
		int n = 8181;
		
		// Constant of fn0 and fn1 and variable declaration
		int fn0 = 0;
		int fn1 = 1;
		int current = 2;
		int summary = 0;
		
		String result = exeFunc(n, String.valueOf(fn0), String.valueOf(fn1), String.valueOf(summary), current);
		System.out.println(" >> f(" + n + ") : " + result);
	}

}
