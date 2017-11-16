import React from "react";
import { expect } from "chai";
import { shallow } from "enzyme";
import Conditional from
    "../../../../../public/js/reactComponents/searchEntryBox/conditional.react";

const One = () => <div>One</div>;
const Two = () => <div>Two</div>;

describe("<Conditional />", () => {
    it("renders first element if array of nodes is given and condition is true", () => {
        const wrapper = shallow(
            <Conditional condition={true}>
                <One />
                <Two />
            </Conditional>
        );

        expect(wrapper.find("One")).to.have.length(1);
        expect(wrapper.find("Two")).to.have.length(0);
    });

    it("renders second element if array of nodes is given and condition is false", () => {
        const wrapper = shallow(
            <Conditional condition={false}>
                <One />
                <Two />
            </Conditional>
        );

        expect(wrapper.find("One")).to.have.length(0);
        expect(wrapper.find("Two")).to.have.length(1);
    });

    it("renders the element if condition is true and only one element is given", () => {
        const wrapper = shallow(
            <Conditional condition={true}>
                <One />
            </Conditional>
        );

        expect(wrapper.find("One")).to.have.length(1);
    });

    it("does not render the element if condition is false and only one element is given", () => {
        const wrapper = shallow(
            <Conditional condition={false}>
                <One />
            </Conditional>
        );

        expect(wrapper.find("One")).to.have.length(0);
    });
});
