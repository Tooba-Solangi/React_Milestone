function ExpenseDate(props) {
    const month = props.date.tolocalString('en-us', {month:'long'});
    const day = props.date.tolocalString('en-us',{day:'2-digit'});
const year = props.date.getFullYear();



return(
    <div>
<div> {month} </div>
<div> {year} </div>
<div> {date} </div>
</div>

);

}
