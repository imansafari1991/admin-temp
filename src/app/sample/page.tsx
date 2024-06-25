"use client"
import CustomTable from '@/components/CustomTable';
import { SampleRepository } from '@/repositories/SampleRepostitory';
import { HappyProvider } from '@ant-design/happy-work-theme';
import { Button } from 'antd';
const Sample = () => {
    const apiCallHandler = () => {
        let sampleRepo=new SampleRepository("sample");
        sampleRepo.Create({name:'ima',subTitle:'ss'})
    }
    return (
        <HappyProvider>
           <CustomTable /> 
            <Button onClick={apiCallHandler}>click</Button>
        </HappyProvider>
    );
}

export default Sample;