import React from 'react';
import TipInfoForm from './Components/TipInfoForm/TipInfoForm';
import { Connect } from 'aws-amplify-react';
import Amplify, { API, graphqlOperation, Auth } from 'aws-amplify';
import * as queries from './graphql/queries'
import * as subscriptions from './graphql/subscriptions'
import ViewUserTips from './Components/ViewTipInfo/ViewUserTips';


const UserTips = (props) => {

    const userTips = (
        <div>
        <TipInfoForm />
        <Connect query={graphqlOperation(queries.listTipEntrys)}
                 subscription={graphqlOperation(subscriptions.onCreateTipEntry)}
                 onSubscriptionMsg={this.onNewTipEntry}>
        {({ data: { listTipEntrys }, loading, error }) => {
            if (error) return (<h3>Error</h3>);
            if (loading || !listTipEntrys) return (<h3>Loading...</h3>);
            return (
              <ViewUserTips 
                tipInfo={listTipEntrys.items} 
                user={this.state.curr_user_username}
                />
            )
        }}
        </Connect>
        </div>
      );

      return userTips;

}

export default UserTips;

