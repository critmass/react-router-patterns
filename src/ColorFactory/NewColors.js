import { useContext, useState } from "react"
import {
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
} from "reactstrap"
import ColorContext from "./ColorContext"
import colorList from "./colorList"


const NewColors = () => {

    const {colors, setColors} = useContext(ColorContext)
    const [dropDownIsOpen, setDropDownIsOpen] = useState(false)
    const toggleDropDown = () => setDropDownIsOpen(dd => !dd)

    return (
        <div>
            <Dropdown
                isOpen={dropDownIsOpen}
                toggle={toggleDropDown}>

                    <DropdownToggle caret>
                        Pick a New Color
                    </DropdownToggle>
                    <DropdownMenu>
                        {colorList.map(color => {
                            const colorUsed = colors.includes(color)
                            const handleClick = e => {
                                if (!colorUsed) {
                                    setColors(state => [...state, color])
                                }
                            }
                            return (
                                <DropdownItem
                                    disabled={colorUsed}
                                    onClick={handleClick}
                                    key={color}
                                    >

                                    {color}
                                </DropdownItem>
                            )
                        })}
                    </DropdownMenu>
            </Dropdown>
        </div>
    )

}

export default NewColors



            /*<InputGroup>
                <InputGroupButtonDropdown
                    addonType="append"
                    isOpen={dropDownIsOpen}
                    toggle={toggleDropDown}>

                    <DropdownToggle caret>
                        Pick A New Color
                    </DropdownToggle>
                    <DropdownMenu>

                    </DropdownMenu>
                </InputGroupButtonDropdown>
            </InputGroup>*/