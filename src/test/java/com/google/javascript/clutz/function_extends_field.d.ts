declare namespace ಠ_ಠ.clutz.module$exports$fn$field {
  class A extends A_Instance {
  }
  class A_Instance {
    private noStructuralTyping_: any;
    f : any ;
    g : any ;
    h ( ) : number ;
    pf : any ;
    pg : any ;
    ph ( ) : number ;
  }
  class B extends B_Instance {
  }
  class B_Instance extends ಠ_ಠ.clutz.module$exports$fn$field.A_Instance {
    f : ( ) => number ;
    h ( ) : number ;
    pf : ( ) => number ;
    ph ( ) : number ;
  }
  class C extends C_Instance {
  }
  class C_Instance extends ಠ_ಠ.clutz.module$exports$fn$field.B_Instance {
    g : ( ) => number ;
    pg : ( ) => number ;
  }
}
declare namespace ಠ_ಠ.clutz.module$exports$fn.field {
  export import A =  ಠ_ಠ.clutz.module$exports$fn$field.A;
}
declare namespace ಠ_ಠ.clutz.module$exports$fn.field {
  export import B =  ಠ_ಠ.clutz.module$exports$fn$field.B;
}
declare namespace ಠ_ಠ.clutz.module$exports$fn.field {
  export import C =  ಠ_ಠ.clutz.module$exports$fn$field.C;
}
declare module 'goog:fn.field' {
  import alias = ಠ_ಠ.clutz.module$exports$fn$field;
  export = alias;
}
