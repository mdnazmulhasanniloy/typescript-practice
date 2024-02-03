// a type is dependent on another type

type a1 = null;
type a3 = undefined;
type a4 = number;
type a2 = a1 extends string ? string : null;

// ..nested conditional type
type d = a1 extends null
  ? null
  : a3 extends number
  ? number
  : a4 extends null
  ? null
  : never;

type sheikh = {
  wife1: string;
  wife2: string;
};

// check sheikh type have wife1 if wife1 is have then check wife2 if wife2 have then check wife3 if is not have then return false

type checkProperty<T, k> = k extends keyof sheikh ? true : false;

type checkWife = checkProperty<sheikh, "wife2">;

// example 2

type friends = "Monika" | "Rachel" | "Halima" | "Nasir";

type removeFriends<T, K> = T extends K ? never : T;

type currentFriends = removeFriends<friends, "Halima">;
