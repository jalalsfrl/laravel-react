import React, {useEffect, useRef, useState} from 'react';
import {FuseAnimateGroup, FusePageSimple} from '@fuse';
import {useDispatch, useSelector} from 'react-redux';
import withReducer from 'app/store/withReducer';
import * as Actions from './store/actions'
import reducer from './store/reducers';
import _ from 'lodash';
import PlanCard from './widgets/PlanCard';

const planData = [
    {id: 1, plan: 'SERPICO', price: '€50', duration: '30 Days', attackSecond: 1200, concurrent: 1, api: '(L4 + L7)', limit: 'Unlimited', method: 'Premium', network: 'Premium'},
    {id: 2, plan: 'KASPER', price: '€65', duration: '30 Days', attackSecond: 3600, concurrent: 1, api: '(L4 + L7)', limit: 'Unlimited', method: 'Premium', network: 'Premium'},
    {id: 3, plan: 'KALARZ', price: '€80', duration: '30 Days', attackSecond: 7200, concurrent: 1, api: '(L4 + L7)', limit: 'Unlimited', method: 'Premium', network: 'Premium'},
    {id: 4, plan: 'ANDYQUEZ', price: '€100', duration: '30 Days', attackSecond: 1200, concurrent: 2, api: '(L4 + L7)', limit: 'Unlimited', method: 'Premium', network: 'Premium'},
    {id: 5, plan: 'V-DOS', price: '€120', duration: '30 Days', attackSecond: 3600, concurrent: 2, api: '(L4 + L7)', limit: 'Unlimited', method: 'Premium', network: 'Premium'},
    {id: 6, plan: 'YUBINA', price: '€160', duration: '30 Days', attackSecond: 7200, concurrent: 2, api: '(L4 + L7)', limit: 'Unlimited', method: 'Premium', network: 'Premium'},
    {id: 7, plan: 'PARASJHA', price: '€190', duration: '30 Days', attackSecond: 3600, concurrent: 3, api: '(L4 + L7)', limit: 'Unlimited', method: 'Premium', network: 'Premium'},
    {id: 8, plan: 'APOPHIS', price: '€240', duration: '30 Days', attackSecond: 7200, concurrent: 3, api: '(L4 + L7)', limit: 'Unlimited', method: 'Premium', network: 'Premium'},
    {id: 9, plan: 'SLAYKINGS', price: '€350', duration: '30 Days', attackSecond: 10800, concurrent: 4, api: '(L4 + L7)', limit: 'Unlimited', method: 'Premium', network: 'Premium'},
    {id: 10, plan: 'BRIANKREBS', price: '€400', duration: '30 Days', attackSecond: 10800, concurrent: 5, api: '(L4 + L7)', limit: 'Unlimited', method: 'Premium', network: 'Premium'},
    {id: 11, plan: 'RADWARE', price: '€450', duration: '30 Days', attackSecond: 43200, concurrent: 2, api: '(L4 + L7)', limit: 'Unlimited', method: 'Premium', network: 'Premium'},
    {id: 12, plan: 'LIZARDSQUAD', price: '€700', duration: '30 Days', attackSecond: 86400, concurrent: 2, api: '(L4 + L7)', limit: 'Unlimited', method: 'Premium', network: 'Premium'}
];

const unit = {
    duration:"duration1", attackSecond:"attack seconds", concurrent:"concurrent attack", api:"API access", limit:"attacks",
    method:"method", network:"network", buttonname:"primary"
};





function PackagesApp(props)
{
    // const dispatch = useDispatch();
    // const projects = useSelector(({packagesApp}) => packagesApp.projects);

    const dispatch = useDispatch();
    // const widgets = useSelector(({dashboardApp}) => dashboardApp.widgets);
    const pack_info = useSelector(({fuse}) => fuse.pack_info);
    console.log(pack_info);

    const pageLayout = useRef(null);

    // useEffect(() => {
    //     dispatch(Actions.getProjects());
    // }, [dispatch]);

    planData[0].plan = pack_info[0].chinese;
    planData[0].price = pack_info[1].chinese;
    planData[0].duration = pack_info[3].chinese;
    planData[0].attackSecond = pack_info[5].chinese;
    planData[0].concurrent = pack_info[7].chinese;
    planData[0].api = pack_info[9].chinese;
    planData[0].limit = pack_info[11].chinese;
    planData[0].method = pack_info[13].chinese;
    planData[0].network = pack_info[15].chinese;

    unit.duration=pack_info[2].chinese;
    unit.attackSecond=pack_info[4].chinese;
    unit.concurrent=pack_info[6].chinese;
    unit.api = pack_info[8].chinese;
    unit.limit = pack_info[10].chinese;
    unit.method = pack_info[12].chinese;
    unit.network = pack_info[14].chinese;
    unit.buttonname = pack_info[115].chinese;


    for(let i=0;i<planData.length-1; i++){
        planData[i+1].plan = pack_info[16+i*9].chinese;
        planData[i+1].price = pack_info[17+i*9].chinese;
        planData[i+1].duration = pack_info[18+i*9].chinese;
        planData[i+1].attackSecond = pack_info[19+i*9].chinese;
        planData[i+1].concurrent = pack_info[20+i*9].chinese;
        planData[i+1].api = pack_info[21+i*9].chinese;
        planData[i+1].limit = pack_info[22+i*9].chinese;
        planData[i+1].method = pack_info[23+i*9].chinese;
        planData[i+1].network = pack_info[24+i*9].chinese;
    }

    const planData1 = planData.slice(0, 3);
    const planData2 = planData.slice(3, 6);
    const planData3 = planData.slice(6, 9);
    const planData4 = planData.slice(9, 12);




    return (
        <FusePageSimple
            content={
                <React.Fragment>
                    <FuseAnimateGroup
                        className="flex flex-wrap pb-12"
                        enter={{
                            animation: "transition.slideUpBigIn"
                        }}
                    >
                        {planData1.map(data => (
                            <div key={data.id} className="widget flex w-full md:w-1/3 p-12">
                                <PlanCard info={data}  unit1={unit}/>
                            </div>
                        ))}
                    </FuseAnimateGroup>

                    <FuseAnimateGroup
                        className="flex flex-wrap pb-12"
                        enter={{
                            animation: "transition.slideUpBigIn"
                        }}
                    >
                        {planData2.map(data => (
                            <div key={data.id} className="widget flex w-full md:w-1/3 p-12">
                                <PlanCard info={data} unit1={unit}/>
                            </div>
                        ))}
                    </FuseAnimateGroup>

                    <FuseAnimateGroup
                        className="flex flex-wrap pb-12"
                        enter={{
                            animation: "transition.slideUpBigIn"
                        }}
                    >
                        {planData3.map(data => (
                            <div key={data.id} className="widget flex w-full md:w-1/3 p-12">
                                <PlanCard info={data} unit1={unit}/>
                            </div>
                        ))}
                    </FuseAnimateGroup>

                    <FuseAnimateGroup
                        className="flex flex-wrap pb-12"
                        enter={{
                            animation: "transition.slideUpBigIn"
                        }}
                    >
                        {planData4.map(data => (
                            <div key={data.id} className="widget flex w-full md:w-1/3 p-12">
                                <PlanCard info={data} unit1={unit}/>
                            </div>
                        ))}
                    </FuseAnimateGroup>
                </React.Fragment>
            }
            ref={pageLayout}
        />
    );
}

export default withReducer('packagesApp', reducer)(PackagesApp);
