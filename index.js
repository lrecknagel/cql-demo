const _result = (a, b) => ({ a, b });

function fn1() {
  return _result(1, 2);
}
function fn2() {
  return _result(
    'A_SUPER_LOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO_STRING',
    2
  );
}
function fn3() {
  return _result(
    'A_SUPER_LOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO_STRING',
    null
  );
}

fn1();
fn2();
fn3();