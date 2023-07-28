import {IImpactModelInterface} from "./interfaces";

export class CloudCarbonFootprint implements IImpactModelInterface {
    authParams: object | undefined;

    authenticate(authParams: object): void {
        this.authParams = authParams;
    }

    calculate(observations: object | object[] | undefined): Promise<object> {
        console.log(observations);
        return Promise.resolve({});
    }

    async configure(name: string, staticParams: object | undefined): Promise<IImpactModelInterface> {
        console.log(name, staticParams)
        return this;
    }

    modelIdentifier(): string {
        return "org.cloudcarbonfootprint.sci";
    }

}
