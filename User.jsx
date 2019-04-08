'use strict';

import React from 'react';

const User = function (props) {

        const {user} = props;
        return <tr>
            <td>{user.id}</td>
            <td>{user.name}</td>
        </tr>
    };

// const User = props => {
//     const {user} = props;
//     return <tr>
//         <td>{user.id}</td>
//         <td>{user.name}</td>
//     </tr>
// };

export default User;