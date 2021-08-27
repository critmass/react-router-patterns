import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import {
    Button,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupButtonDropdown
} from "reactstrap"

const Calculator = () => {
    const [inputs, setInputs] = useState({x:0, y:0, operation:""})

    const history = useHistory()

    const [dropDownIsOpen, setDropDownIsOpen] = useState(false)
    const toggleDropDown = () => setDropDownIsOpen(dd => !dd)

    const handleChange = evt => {
        setInputs(state => {
            return {
                ...state,
                [evt.target.name]:evt.target.value
            }
        })
    }

    const handleSubmit = () => {
        const opp = inputs.operation
        const x = inputs.x
        const y = inputs.y
        history.push(`/calc/${opp}/${x}/${y}`)
    }


    return (
        <div>
            <InputGroup>
                <InputGroupAddon>First Number</InputGroupAddon>
                <Input
                    type="number"
                    name="x"
                    value={inputs.x}
                    onChange={handleChange}
                />
            </InputGroup>
            <InputGroup>
                <InputGroupAddon> Number</InputGroupAddon>
                <Input
                    type="number"
                    name="y"
                    value={inputs.y}
                    onChange={handleChange}
                />
            </InputGroup>
            <InputGroup>
                <InputGroupButtonDropdown
                    addonType="prepend"
                    isOpen={dropDownIsOpen}
                    toggle={toggleDropDown}>
                        <DropdownToggle caret>
                            Select
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem
                                onClick={handleChange}
                                value="add"
                                name="operation"
                            >add</DropdownItem>
                            <DropdownItem
                                onClick={handleChange}
                                value="subtract"
                                name="operation"
                            >subtract</DropdownItem>
                            <DropdownItem
                                onClick={handleChange}
                                value="multiply"
                                name="operation"
                            >multiply</DropdownItem>
                            <DropdownItem
                                onClick={handleChange}
                                value="divide"
                                name="operation"
                            >divide</DropdownItem>
                        </DropdownMenu>
                </InputGroupButtonDropdown>
                <Input
                    type="text"
                    value={inputs.operation}
                    placeholder="operation"
                />
            </InputGroup>
            <Button onClick={handleSubmit}>Equate</Button>
        </div>
    )
}

export default Calculator