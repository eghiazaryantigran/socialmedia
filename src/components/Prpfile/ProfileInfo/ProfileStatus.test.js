import ProfileStatus from "./ProfileStatus";
import {create} from "react-test-renderer";

describe("PrifileStatus component", () => {
    test("after creaction <span> with status shuld to be displeyid", () => {
        const component = create(<ProfileStatus status="we give him status" />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("we give him status");
    });

    test(`after creaction <span> with status shuld to be displeyid`, () => {
        const component = create(<ProfileStatus status="we give him status" />);
        const root = component.root;
        const span = root.findByType("span");

        expect(span).not.toBeNull();
    });

    test(`after creaction <input> with status shuld to be displeyid`, () => {
        const component = create(<ProfileStatus status="we give him status"/>);
        const root = component.root;
        expect(() => {
            const input = root.findByType("input");
        }).toThrow()
    });

    test("after creaction <span> shuld contains correct status", () => {
        const component = create(<ProfileStatus status="we give him status" />);
        const root = component.root;
        const span=root.findByType("span");

        expect(span.children[0]).toBe("we give him status")
    });


    test("<input>shuld be displeyid in Edit Mode instend of span", () => {
        const component = create(<ProfileStatus status="we give him status" />);
        const root = component.root;
        const span=root.findByType("span");
        span.props.onDoubleClick();
        const input = root.findByType("input");

        expect(input.props.value).toBe("we give him status")
    });

    test("callbeck should be called", () => {
        const mockCallbeck=jest.fn()//feik callbeck function from jest
        const component = create(<ProfileStatus status="we give him status"  updateStatus={mockCallbeck}/>);
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(mockCallbeck.mock.calls.length).toBe(1)
    });
});