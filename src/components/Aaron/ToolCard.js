import React from 'react'

const ToolCard = props => {

    const toggleBorrow = (tool) => {
        const updateBorrowedTool = {
            borrowed: 1,
            borrowed_to: localStorage.getItem('username')
        }
        console.log('updated tool', updateBorrowedTool);
        props.updateTool(updateBorrowedTool, tool.id);
    }

    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-title">Tool: {props.Name}</h4>
                <p>Owner: {props.Owner} </p>
                <p>Price: {props.Price} </p>
                <p>Location: {props.Location} </p>
                {props.Borrowed === 0 &&                             
                    <button
                        onClick={() => toggleBorrow(props)}
                        className="btn btn-custom"
                        type="submit"
                    >Borrow
                    </button>}
                {props.Borrowed === 1 &&
                    <button
                        onClick={() => toggleBorrow(props)}
                        className="btn btn-custom"
                        type="submit"
                        disabled
                    >Borrowed
                    </button>}
            </div>
        </div>
    )
}

export default ToolCard;