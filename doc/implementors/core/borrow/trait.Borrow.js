(function() {var implementors = {};
implementors["boa"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"boa/builtins/value/rcstring/struct.RcString.html\" title=\"struct boa::builtins::value::rcstring::RcString\">RcString</a>","synthetic":false,"types":["boa::builtins::value::rcstring::RcString"]}];
implementors["gc"] = [{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"gc/trait.Trace.html\" title=\"trait gc::Trace\">Trace</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;T&gt; for <a class=\"struct\" href=\"gc/struct.Gc.html\" title=\"struct gc::Gc\">Gc</a>&lt;T&gt;","synthetic":false,"types":["gc::Gc"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()