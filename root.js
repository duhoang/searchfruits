import React from 'react';
import ReactDOM from 'react-dom';
import './app.scss';

const options = [
    'Açaí', 'Apple', 'Akee', 'Apricot', 'Avocado', 'Banana', 'Bilberry', 
    'Blackberry', 'Blackcurrant', 'Black sapote', 'Blueberry', 'Boysenberry',
    'Crab apples', 'Currant', 'Cherry', 'Cloudberry', 'Coconut', 'Cranberry',
    'Cucumber', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 
    'Feijoa', 'Fig', 'Goji berry', 'Gooseberry', 'Grape', 'Raisin', 
    'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba',
    'Jackfruit', 'Jambul', 'Japanese plum', 'Jostaberry', 'Jujube',
    'Juniper berry', 'Kiwano', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime',
    'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon',
    'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry',
    'Nectarine', 'Nance', 'Olive', 'Orange', 'Blood orange', 'Clementine',
    'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear',
    'Persimmon', 'Plantain', 'Plum', 'Prune', 'Pineapple', 'Pineberry',
    'Plumcot', 'Pomegranate', 'Pomelo', 'Purple mangosteen', 'Quince', 
    'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salal berry',
    'Salak', 'Satsuma', 'Soursop', 'Star apple', 'Star fruit', 'Strawberry',
    'Surinam cherry', 'Tamarillo', 'Tamarind', 'Ugli fruit', 'Yuzu',
    'White currant', 'White Sapote'
]

class List extends React.Component {
    render () {
        return (
            <div className="list">
               {this.props.values.map(v => {
                   return (
                       <div key={v}>
                           {v}
                        </div>
                   )
               })
               }
            </div>
        )
    }
}


class Typeahead extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        currInput: "",
        filteredList: []
    };
    this.typeahead = this.typeahead.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }
  
  typeahead(evt) {
    const str = evt.target.value;

    const filteredOptions = this.state.currInput && str.indexOf(this.state.currInput) == 0 ? this.state.filteredList : options;
  
    const list = filteredOptions.filter(o => {
       return o.slice(0, str.length + 1).toLowerCase().indexOf(str.toLowerCase()) == 0;
    })

    this.setState((state) => {
        return {
            currInput: str,
            filteredList: list
        }
    });
  }

  handleBlur () {
    this.setState((state) => {
        return {
            filteredList: []
        }
    });

  }

  render() {
      return (
          <div className='container'>
            
            <div className='typeahead'>
                <input 
                    id='typeahead' 
                    onInput={this.typeahead}
                    onBlur={this.handleBlur}
                    placeholder="Search fruits..."
                />
                {this.state.filteredList.length > 0 && (
                    <List 
                        values={this.state.filteredList}
                    />
                )}
            </div>
            
            
          </div>
     );
  }
}

const domContainer = document.querySelector('#root');
ReactDOM.render(<Typeahead/>, domContainer);