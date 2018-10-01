import React, {Component} from 'react';
import {connect} from 'react-redux';
import { SegmentGroup, Segment, Header, Label, Grid } from 'semantic-ui-react';
import {LineChart, XAxis, YAxis, Line} from 'recharts';



const stockInfo = {
    stockCode: "00001",
    stockName: "CKH Holdings",
    priceCurrent: 10.0,
    priceChange: "+0.2",
    historialData: [
        {month: 'May', price: 10.5},
        {month: 'July', price: 10.3},
        {month: 'June', price: 9.8},
        {month: 'Aug', price: 9.9},
        {month: 'Sept', price: 10.2},

    ],

};

class StockView extends Component {
    componentDidMount(){
        
    }

    renderMainInfo(stockItem){
        const contents = [
            {key: "Stock Name", value: stockItem.stockName},
            {key: "Stock code", value: stockItem.stockCode},
            {key: "Price", value: stockItem.priceCurrent},
            {key: "Change", value: stockItem.priceChange},            
        ];

        return (
            <SegmentGroup horizontal>
                {
                    contents.map(
                        (item, index) => (
                            <Segment key={index}>
                                <Label attached='top'>{item.key}</Label>
                                <Header>{item.value}</Header>
                            </Segment>
                        )
                    )
                }

            </SegmentGroup>
        )
    }

    renderBasicInfo(stockInfo){
        const contents = [
            {key:"Avg Price", value:"10.0"},
            {key:"Mkt Cap", value:"10.0B"},
            {key:"Lots", value:"500"},
            {key:"Dummy Field 1", value:"10.0"},
            {key:"Dummy Field 2", value:"10.0"},
            {key:"Dummy Field 3", value:"10.0"},
            {key:"Dummy Field 4", value:"10.0"},
            
            
            
        ];
        return(
            <Segment >
                <Grid columns={3} padded>
                    { contents.map(
                        (item, index) => (
                            <Grid.Column key={index}  style={{padding: '0rem 1rem 0.5rem 1rem'}} >
                                <Header size='small'>{item.key}</Header>
                                {item.value}
                            </Grid.Column>
                        )
                    )}
                </Grid>
            </Segment>

        );
    }

    render(){
        console.log("Stock view render:");
        console.log(this.props);
        console.log(this.props.match.params.id);

        return (
            <React.Fragment>
                { this.renderMainInfo(stockInfo) }
                
                <LineChart width={600} height={300} data={stockInfo.historialData}
                        margin={{top: 5, right: 30, left: 20, bottom: 5}}                        
                        >
                <XAxis dataKey="month"/>
                <YAxis type='number' domain={['dataMin', 'dataMax']}/>
                
                <Line type="monotone" dataKey="price" stroke="#82ca9d" />
                </LineChart>

                { this.renderBasicInfo(stockInfo) }                
            </React.Fragment>
        )
    }
}

const initialState = {
    code: "0001",
    name: "DUMMY",
    price: 10.0,
};

const mapStateToProps = (state) => {
    console.log("reducer state");
    console.log(state);
    return {
        Stock: state.stockInfo
    }
}

const mapDispatchToProps = (dispatch, props) => (
    {
        dummy: ()=>dispatch(()=>{})
    }
);
  
export default connect (mapStateToProps, mapDispatchToProps)(StockView);