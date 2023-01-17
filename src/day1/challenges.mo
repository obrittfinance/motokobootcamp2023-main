
actor {
    public func multiply(n : Nat, m : Nat) : async Nat{
        return (n * m);
    };

    public func volume(n : Nat) : async Nat{
        return (n * n * n);
    };

      public func hours_to_minutes(n : Nat) : async Nat {
    return(n * 60);
  };

        var counter = 0;



  public func get_counter (n : Nat) : async Nat {

    counter +=n;
    return counter;
  };

    public func is_even (n : Nat) : async Bool {
    (n % 2 == 0);
  };

  public func test_divide (x : Nat, y: Nat) : async Bool {
    if(x % y == 0){
      return true 
    } else {
      return false;
    };
  };

};