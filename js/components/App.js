 import m from "../lib/mithril/mithril.js";


 var App = {
     view: function () {
         return m('.container',
             m('.row',
                 m('.one-half column',
                     m('h4','Base Page'),
                     m('',`This page rendered using mithrilJS and the styles are used from skeleton`
                    )
                 )
             )
         );
     }
 }


 export default App