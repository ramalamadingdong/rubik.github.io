# Install IM SDK (Intelligent Multimedia SDK)

The Intelligent Multimedia SDK (IM SDK) is a comprehensive software development kit provided by Qualcomm for their IoT and edge computing platforms. It enables developers to leverage hardware-accelerated multimedia processing, sensor integration, and AI capabilities on Qualcomm-based devices like the Rubik Pi.

## What is the IM SDK?

The IM SDK includes:
- **GStreamer plugins** for hardware-accelerated video encoding/decoding
- **Sensor test applications** for validating device sensors
- **Sample applications** demonstrating multimedia capabilities
- **Development tools** for building custom multimedia applications
- **Libraries** for accessing Qualcomm's specialized hardware features

## Prerequisites

Before installing the IM SDK, ensure your system meets the following requirements:

### System Requirements
- **Operating System**: Ubuntu 24.04 LTS (Noble Numbat) or compatible
- **Architecture**: ARM64 (aarch64)
- **RAM**: Minimum 2GB, recommended 4GB+
- **Storage**: At least 1GB free space for SDK components
- **Network**: Active internet connection for package downloads

### User Permissions
- Administrative (sudo) access to the system
- User account with package installation privileges

### Verify System Compatibility
```bash
# Check Ubuntu version
lsb_release -a

# Verify architecture
uname -m

# Check available disk space
df -h
```

## Installation Steps

### Step 1: Update System Packages

First, ensure your system is up-to-date:

```bash
# Update package lists
sudo apt update

# Upgrade existing packages
sudo apt upgrade -y

# Install essential build tools (if not already present)
sudo apt install -y software-properties-common apt-transport-https ca-certificates gnupg lsb-release
```

### Step 2: Add Qualcomm IoT Repository

The IM SDK packages are distributed through Qualcomm's official Ubuntu PPA (Personal Package Archive):

```bash
# Add the Qualcomm IoT PPA for Ubuntu Noble
sudo add-apt-repository ppa:ubuntu-qcom-iot/qcom-noble-ppa
```

**What this command does:**
- Adds Qualcomm's official package repository to your system
- Configures GPG keys for package verification
- Enables access to Qualcomm-specific software packages
- Targets Ubuntu Noble (24.04) release specifically

### Step 3: Update Package Lists

After adding the new repository, refresh your package lists:

```bash
# Update package lists to include new repository
sudo apt update
```

### Step 4: Install IM SDK Components

Install the core IM SDK packages:

```bash
# Install GStreamer sample applications and sensor test apps
sudo apt install -y gstreamer1.0-qcom-sample-apps qcom-sensors-test-apps
```

**Package Details:**

#### `gstreamer1.0-qcom-sample-apps`
- **Purpose**: Provides hardware-accelerated GStreamer plugins and sample applications
- **Features**: 
  - Video encoding/decoding using Qualcomm hardware
  - Camera capture and processing
  - Display output optimization
  - Multimedia pipeline examples
- **Size**: Approximately 150-200MB

#### `qcom-sensors-test-apps`
- **Purpose**: Testing and validation tools for device sensors
- **Features**:
  - Accelerometer testing
  - Gyroscope validation
  - Temperature sensor monitoring
  - GPIO interface testing
  - I2C/SPI communication tools
- **Size**: Approximately 50-100MB

### Step 5: Verify Installation

Confirm the installation was successful:

```bash
# Check installed packages
dpkg -l | grep qcom

# Verify GStreamer plugins
gst-inspect-1.0 | grep qcom

# List available sensor test applications
ls /usr/bin/qcom-*
```

## Post-Installation Configuration

### Environment Setup

Add the following to your shell profile (`~/.bashrc` or `~/.zshrc`):

```bash
# Add Qualcomm library paths
export LD_LIBRARY_PATH=/usr/lib/aarch64-linux-gnu/gstreamer-1.0:$LD_LIBRARY_PATH
export GST_PLUGIN_PATH=/usr/lib/aarch64-linux-gnu/gstreamer-1.0:$GST_PLUGIN_PATH
```

Apply the changes:
```bash
source ~/.bashrc
```

### Permissions Configuration

For sensor access, add your user to the appropriate groups:

```bash
# Add user to gpio group for GPIO access
sudo usermod -a -G gpio $USER

# Add user to i2c group for I2C access
sudo usermod -a -G i2c $USER

# Add user to spi group for SPI access
sudo usermod -a -G spi $USER

# Log out and log back in for changes to take effect
```

## Testing the Installation

### Test GStreamer Functionality

```bash
# Test video pipeline
gst-launch-1.0 videotestsrc ! qcomvenc ! qcomvdec ! autovideosink

# Test camera capture (if camera is connected)
gst-launch-1.0 qcomcamsrc ! autovideosink
```

### Test Sensor Applications

```bash
# Test accelerometer
qcom-sensor-test --accel

# Test gyroscope
qcom-sensor-test --gyro

# Test temperature sensors
qcom-sensor-test --temp
```

## Troubleshooting

### Common Issues and Solutions

#### Repository Access Issues
```bash
# If repository addition fails
sudo apt-get install software-properties-common
sudo add-apt-repository --remove ppa:ubuntu-qcom-iot/qcom-noble-ppa
sudo add-apt-repository ppa:ubuntu-qcom-iot/qcom-noble-ppa
```

#### Package Installation Failures
```bash
# Clear package cache
sudo apt clean
sudo apt autoclean

# Fix broken packages
sudo apt --fix-broken install

# Retry installation
sudo apt update && sudo apt install -y gstreamer1.0-qcom-sample-apps qcom-sensors-test-apps
```

#### Permission Denied Errors
```bash
# Fix file permissions
sudo chmod +x /usr/bin/qcom-*

# Verify user groups
groups $USER
```

#### Missing Dependencies
```bash
# Install additional GStreamer components
sudo apt install -y gstreamer1.0-plugins-base gstreamer1.0-plugins-good gstreamer1.0-plugins-bad gstreamer1.0-plugins-ugly

# Install development headers (if needed)
sudo apt install -y libgstreamer1.0-dev libgstreamer-plugins-base1.0-dev
```

### Diagnostic Commands

```bash
# Check system logs for errors
sudo journalctl -u apt-daily -f

# Verify repository configuration
sudo apt-cache policy

# Check available package versions
apt list --upgradable | grep qcom
```

## Advanced Configuration

### Custom GStreamer Pipelines

Create custom multimedia pipelines using the installed components:

```bash
# Hardware-accelerated video transcoding
gst-launch-1.0 filesrc location=input.mp4 ! qtdemux ! h264parse ! qcomvdec ! qcomvenc ! qtmux ! filesink location=output.mp4

# Real-time camera preview with effects
gst-launch-1.0 qcomcamsrc ! qcomvpufilter effect=blur ! autovideosink
```

### Sensor Data Logging

```bash
# Log sensor data to file
qcom-sensor-test --all --log=/var/log/sensor_data.log

# Monitor sensors in real-time
qcom-sensor-test --monitor --interval=1000
```

## Integration with Development Workflow

### Building Custom Applications

```bash
# Install development dependencies
sudo apt install -y build-essential cmake pkg-config

# Example compilation flags
export CFLAGS="-I/usr/include/gstreamer-1.0"
export LDFLAGS="-L/usr/lib/aarch64-linux-gnu"
```

### Docker Integration

If using Docker containers:

```dockerfile
FROM ubuntu:24.04

RUN apt-get update && \
    apt-get install -y software-properties-common && \
    add-apt-repository ppa:ubuntu-qcom-iot/qcom-noble-ppa && \
    apt-get update && \
    apt-get install -y gstreamer1.0-qcom-sample-apps qcom-sensors-test-apps

# Add device access for sensors
RUN usermod -a -G gpio,i2c,spi container_user
```

## Performance Optimization

### Memory Management
```bash
# Monitor memory usage
free -h
sudo systemctl status qcom-memory-manager

# Optimize for multimedia workloads
echo 'vm.swappiness=10' | sudo tee -a /etc/sysctl.conf
```

### CPU Scaling
```bash
# Set performance governor for multimedia tasks
sudo cpufreq-set -g performance

# Monitor CPU usage
htop
```

## Support and Resources

### Documentation
- [Qualcomm Developer Network](https://developer.qualcomm.com/)
- [GStreamer Documentation](https://gstreamer.freedesktop.org/documentation/)
- [Ubuntu IoT Documentation](https://ubuntu.com/internet-of-things)

### Community Support
- [Qualcomm Developer Forums](https://developer.qualcomm.com/forums)
- [GStreamer Mailing Lists](https://gstreamer.freedesktop.org/lists/)

### Reporting Issues
If you encounter problems:
1. Check the troubleshooting section above
2. Review system logs: `sudo journalctl -xe`
3. Verify hardware compatibility
4. Report issues to the appropriate support channels

## Next Steps

After successful installation, consider:
1. **Exploring sample applications** in `/usr/share/qcom-samples/`
2. **Reading the API documentation** for custom development
3. **Running performance benchmarks** to baseline your system
4. **Integrating with your existing projects** using the provided libraries

The IM SDK installation is now complete and ready for multimedia and sensor development on your Rubik Pi device. 

