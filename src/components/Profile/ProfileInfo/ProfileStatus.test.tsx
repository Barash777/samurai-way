import {act, create} from 'react-test-renderer';
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
// import {create} from "react-test-renderer";
import '@testing-library/jest-dom'

describe('something', () => {

    test('check profile status', () => {
        const component = create(<ProfileStatusWithHooks
            status={'status'}
            updateProfileStatus={() => {
            }}
        />)
        const instance = component.getInstance()
        expect(instance?.props.status).toBe('status')
    })

    test('check profile status again', () => {
        const component = create(<ProfileStatusWithHooks
            status={'status'}
            updateProfileStatus={() => {
            }}
        />)
        const instance = component.root
        const span = instance.findByType('span')
        expect(span.children[0]).toBe("status")
    })

    test('check input appears and span hide', () => {
        const component = create(<ProfileStatusWithHooks
            status={'status'}
            updateProfileStatus={() => {
            }}
        />)
        const instance = component.root
        const span = instance.findByType('span')
        expect(span.children[0]).toBe("status")

        act(() => {
            span.props.onDoubleClick()
        })

        const input = instance.findByType('input')
        expect(input.props.value).toBe('status')
    })

    test('callback should be called', () => {
        const cb = jest.fn()
        const component = create(<ProfileStatus
            status={'status'}
            updateProfileStatus={cb}
        />)
        const instance = component.getInstance()
        //@ts-ignore
        instance?.setNewStatus()
        expect(cb.mock.calls.length).toBe(1)

        /*
        const span = instance.findByType('span')

        expect(span.children[0]).toBe("status")

        act(() => {
            span.props.onDoubleClick()
        })

        const input = instance.findByType('input')
        expect(input.props.value).toBe('status')*/
    })

})

