import React from "react";

export function WithSuspense(Component: any) {
    function newComponent(props: any) {
        return (
            <React.Suspense fallback={<div>Loading...</div>}>
                <Component{...props}/>
            </React.Suspense>
        );
    }

    return newComponent;
}