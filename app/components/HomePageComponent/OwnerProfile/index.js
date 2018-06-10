/**
*
* OwnerProfile
*
*/

import React from 'react';
// import styled from 'styled-components';
import { Link } from 'react-router-dom'

function OwnerProfile() {
  return (
    <div>
      <div>
        <h1>Quem é Patrícia ?</h1>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in justo ullamcorper, sollicitudin turpis dapibus, hendrerit tortor. Morbi tincidunt non sapien nec pretium. Donec elementum tristique consequat. Cras ut orci at felis accumsan ullamcorper non quis risus. Ut at ex mi. Aenean ac varius elit, eu congue dolor. Praesent elit purus, elementum nec molestie nec, molestie ut sapien. Nulla consequat justo in volutpat tincidunt. Vestibulum vitae consequat tortor.
          Mauris aliquam justo dolor, ut pulvinar nulla pellentesque nec. Praesent dapibus lorem eros, ut bibendum elit sagittis vel. Ut at magna placerat, bibendum quam sed, interdum metus. Praesent id risus luctus, viverra ex non, iaculis risus. Vestibulum mattis vitae arcu sollicitudin sollicitudin. Sed et purus tempor, fermentum felis sit amet, accumsan sem. Nam ornare eleifend commodo. Fusce fermentum tortor a urna tincidunt, et convallis magna rhoncus. Donec rhoncus vulputate enim id hendrerit. Suspendisse sagittis purus sed blandit hendrerit.
          Duis justo odio, blandit quis augue ac, faucibus faucibus enim. Nulla facilisi. Aliquam tristique nulla non sapien egestas, in lobortis mi semper. In enim felis, blandit eu tincidunt in, aliquet ac velit. Ut cursus mattis leo sed commodo. Nulla lacinia, erat a gravida posuere, erat felis luctus orci, sed placerat turpis metus in elit. Praesent mattis nisl sed imperdiet sodales. Nullam non nulla vel mauris scelerisque commodo eget in nunc. Suspendisse sagittis libero eget vehicula convallis. Nulla nec tellus vehicula, mattis dolor id, maximus nunc. Maecenas non blandit urna. Aliquam erat urna, venenatis sit amet ex ut, pellentesque feugiat erat.
        </span>
      </div>
      <div>
        <Link to='/biography'>CONHEÇA MAIS SOBRE MIM</Link>
      </div>
    </div>
  );
}

OwnerProfile.propTypes = {

};

export default OwnerProfile;
