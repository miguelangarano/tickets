import React, {Component} from 'react';
import { ListGroup, ListGroupItem, Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import {connect} from 'react-redux';
import {getTickets} from '../appdata/actions/ticketActions';
import PropTypes from 'prop-types';
import '../styles/style.css';
import ReporteModal from './ReporteModal';

import {
  CSSTransition,
  TransitionGroup
} from 'react-transition-group';

class TicketList extends Component {

    constructor(props) {
        super(props);
        this.state = {
          modal: false,
          activeTicket:{
              name:'default',
              ticketid:'default',
              phone:'default',
              email:'default'
          }
        };
        this.toggle1 = this.toggle1.bind(this);
        this.onClick=this.onClick.bind(this);
      }

  componentDidMount(){
    this.props.getTickets();
  }


  toggle1(){
    this.setState({
      modal: !this.state.modal
    });
  }

  onClick(tick){
      //console.log(tick);
      this.setState({
          activeTicket:{
              name:tick.name,
              ticketid:tick.ticketid,
              phone:tick.phone,
              email:tick.email
          }
      });
      this.toggle1();
  }

  onClickCargarMas(){
    console.log('Cargar mas');
  }


  render() {
    
    const {tickets}=this.props.ticket;

    return (
    <div>
      <ReporteModal modal={this.state.modal} toggle={this.toggle1} activeTicket={this.state.activeTicket}></ReporteModal>
        
      <ListGroup>
        <TransitionGroup className="lista">
          {Object.keys(tickets).map((item, i) => (
            <CSSTransition key={tickets[item].id_ticket} timeout={500} classNames="fade">
              <ListGroupItem>
                  <div className='container'>
                      <Card>
                        <CardBody>
                            <CardTitle>ID Ticket: {tickets[item].ticketid} &nbsp;&nbsp; Cliente: {tickets[item].name}</CardTitle>
                            <CardSubtitle>Asunto: {tickets[item].subject}</CardSubtitle>
                            <CardText>Fecha de Creación: {tickets[item].created}</CardText>
                            <Button color="primary" onClick={()=>this.onClick(tickets[item])}>Crear Reporte</Button>
                        </CardBody>
                    </Card>
                  </div>
              </ListGroupItem>
            </CSSTransition>
          ))}
          
        </TransitionGroup>
        <br/>
          <br/>
          <Button onClick={this.onClickCargarMas}>Cargar más</Button>
      </ListGroup>
      </div>
    );
  }
}

TicketList.propTypes={
  getTickets:PropTypes.func.isRequired,
  ticket:PropTypes.object.isRequired
}

const mapStateToProps=(state)=>({
  ticket:state.ticket
});

export default connect(mapStateToProps, {getTickets})(TicketList);