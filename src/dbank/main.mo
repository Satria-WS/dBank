import Debug "mo:base/Debug";
import Time "mo:base/Time";
import Float "mo:base/Float";

actor DBank {
  //adding stable keyword now upgrades our varable to a orthogonally persisted variable
  stable var currentValue: Float = 300;
  // var currentValue: Nat = 300;
  //  currentValue := 100;

  //current Time
  stable var startTime = Time.now();
  // startTime := Time.now();
  Debug.print(debug_show(startTime));

  //add public, to expose this function to the public
  public func topUp(amount: Float) {
    // currentValue += 1;
    currentValue += amount;
    Debug.print(debug_show(currentValue));
  };

  public func withDraw(amount: Float) {
    let tempValue: Float = currentValue - amount;
    if (tempValue >= 0) {
      currentValue -= amount;
      Debug.print(debug_show(currentValue));
    } else {
      Debug.print("Kembalian kurang kentod wkkw");
    }
  };

  public query func checkBalance(): async Float {
    return currentValue;
  };

  //function for tracking time and calculating
  public func compound() {
    let currentTime = Time.now();
    let timeElapsedNanoSecond = currentTime - startTime;
    // Debug.print(debug_show(timeElapsedNanoSecond));
    let timeElapsedSecond = timeElapsedNanoSecond / 1000000000;
    //A = currentValue x (1 + 0.01)**numSec
    currentValue := currentValue * (1.01 ** Float.fromInt(timeElapsedSecond));
    startTime := currentTime;
  };
}