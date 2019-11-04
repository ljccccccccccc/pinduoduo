import { Injectable, ComponentFactoryResolver, ApplicationRef, Injector, Inject, Type, EmbeddedViewRef, ComponentRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';


export interface DialogPos {
    top : string;
    left : string;
    width : string;
    height : string;
}
export interface ChildConfig {
    inputs : object;
    outputs : object;
    position ?: DialogPos;
}

@Injectable({ providedIn: "root" })
export class DomService {

    private childComponentRef : ComponentRef<any>;
    constructor(
        //用组件工厂把组件找到，插入到dom中
        private resolver: ComponentFactoryResolver,
        //所有的dom都在一个组件工厂里，ComponentFactoryResolver就是来解析这个工厂的
        private appRef: ApplicationRef,
        //ApplicationRef 得到angular本身的引用
        private injector: Injector,
        @Inject(DOCUMENT) private document: Document
    ) { }

    public appendComponentTo(
        parentId: string,
        child: Type<any>,
        childConfig : ChildConfig
    ) {
        const childComponentRef = this.resolver
            .resolveComponentFactory(child) //解析childNode
            .create(this.injector);//把injector注入到组件当中去，因为组件可能要使用依赖注入，比如HTTP服务
        this.attatchConfig(childConfig,childComponentRef);
        this.childComponentRef = childComponentRef;
        this.appRef.attachView(childComponentRef.hostView); //把组件放到application中
        const childDomElement = (childComponentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
        this.document.getElementById(parentId).appendChild(childDomElement);
    }

    public removeComponent(){
        //移除
        this.appRef.detachView(this.childComponentRef.hostView);
    }

    public attatchConfig(config : ChildConfig, componentRef : ComponentRef<any>) {
        const inputs = config.inputs;
        const outputs = config.outputs;
        for (const key in inputs) {
            if (inputs.hasOwnProperty(key)) {
                const element = inputs[key];
                componentRef.instance[key] = element;
            }
        }

        for (const key in outputs) {
            if (outputs.hasOwnProperty(key)) {
                const element = outputs[key];
                componentRef.instance[key] = element;
            }
        }
    }
}