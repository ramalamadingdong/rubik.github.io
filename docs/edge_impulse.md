# Using Edge Impulse

## Overview

Edge Impulse is a development platform for building, training, and deploying machine learning models directly on edge devices. With this platform, developers can easily create applications that run offline, in real time, and with low power consumption. 

### With Edge Impulse, you can:
- Collect and label sensor data (eg. audio, vision, motion)
- Train and deploy ML models on a range of hardware
- Easily monitor performance

In this guide, we will walk through how to download Edge Impulse onto the Rubik Pi and use it to download an Impulse, your own customized ML model. 

## Prerequisites

1. Set up an [Edge Impulse](https://studio.edgeimpulse.com/login) account
2. Set up your Rubik Pi with Wi-Fi and SSH enabled. Instructions for this set up can be found [here](https://rubikpi-ai.github.io/documentation/docs/rubik-pi-3-user-manual/quick-start/#11-introduction). 
3. (Optional) Attach a camera to your Rubik Pi device.

## Installing the Edge Impulse CLI

After powering on your Rubik Pi and making sure it is accessible via SSH:  

1. __SSH into the Rubik Pi__  
Run the following command in your terminal, replacing `ip_address` with the actual IP address of your Rubik Pi: 
```bash
$ ssh ubuntu@<ip_address> 
```

2. __Download and run the setup script__  
To download the Edge Impulse Linux CLI, open the Rubik Pi terminal and run the following command:   

```bash
$ wget https://cdn.edgeimpulse.com/firmware/linux/setup-edge-impulse-qc-linux.sh
$ sh setup-edge-impulse-qc-linux.sh
$ source ~/.profile
```

3. __Connect to Edge Impulse__  
Run this command to link your Rubik Pi to your Edge Impulse account:
```bash
$ edge-impulse-linux
```
You will be prompted for your username, email, and password you used to set up your Edge Impulse account, so be sure to have those details ready. If you want to reset the setup or swtich devices, use:
```bash
$ edge-impulse-linux --clean
```

4. __Create an Edge Impulse Project__  
Follow the Edge Impulse tutorial/walkthrough to create a simple object detection project. For an in-depth tutorial, follow the steps found [here](https://docs.edgeimpulse.com/docs/tutorials/end-to-end-tutorials/computer-vision/object-detection/detect-objects-using-fomo).

5. __Verify that your device is connected__  
To double check your device is connected to Edge Impulse, go to your Edge Impulse project and click __Devices__. You should see Rubik Pi 3 listed as one of your devices. You will only see your device under devices if you have created an impulse in your project. 

6. __Run your Impulse__  
To run an Impulse on your Rubik Pi device, run the command: 
```bash
$ edge-impulse-linux-runner
```
With this command, the model that you built will be downloaded and inference will start running, all being done locally on the Rubik Pi. If you followed the steps to create an object detection project and have a camera connected to your Rubik Pi device, then the runner will also provide a view of the camera that is attached to the Rubik Pi. 


## Helpful Links

- [Edge Impulse Docs](https://docs.edgeimpulse.com/docs/edge-ai-hardware/cpu-+-ai-accelerators/thundercomm-rubikpi3#setting-up-your-thundercomm-rubik-pi-3)
- [Setup Tutorial- Video Version](https://www.youtube.com/watch?v=E0kwTcZiTdk&t=541s)
