// import React from 'react';
// import { Loader } from 'rsuite';

// const Spinner = () => {
//     return (
//         <div>
//             <Loader inverse center content="wait"></Loader>
//         </div>
//     );
// }

// export default Spinner;

import { Loader } from "rsuite"

const Spinner = () =>
{
    return(
        // <div>Spinner</div>
        // <div style={{ height: 200, background: '#000' }}>
    <Loader inverse center content="loading..." />
//   {/* </div> */}
    )
}
export default Spinner