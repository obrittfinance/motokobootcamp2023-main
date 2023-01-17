export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'get_counter' : IDL.Func([IDL.Nat], [IDL.Nat], []),
    'hours_to_minutes' : IDL.Func([IDL.Nat], [IDL.Nat], []),
    'is_even' : IDL.Func([IDL.Nat], [IDL.Bool], []),
    'multiply' : IDL.Func([IDL.Nat, IDL.Nat], [IDL.Nat], []),
    'test_divide' : IDL.Func([IDL.Nat, IDL.Nat], [IDL.Bool], []),
    'volume' : IDL.Func([IDL.Nat], [IDL.Nat], []),
  });
};
export const init = ({ IDL }) => { return []; };
