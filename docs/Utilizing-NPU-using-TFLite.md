# Utilizing NPU using TFLite

TFLite models can be run on the RUBIK Pi's AI accelerator. This can be used to greatly increase inference speed for TFLite models used in custom vision processing pipelines.

## Python

In Python, the TFLite delegate for hardware acceleration can be loaded from the dynamic library which comes preinstalled in the RUBIK Pi OS at `/usr/lib/libQnnTFLiteDelegate.so`:
```python
delegate = tf.lite.load_delegate('libQnnTFLiteDelegate.so', { 'backend_type': 'htp' })
```

Then, once a [TFLite interpreter](https://www.tensorflow.org/api_docs/python/tf/lite/Interpreter) has been constructed, the delegate can be added to it:
```python
interpreter.modify_graph_with_delegate(delegate)
```

## C

Equivalently, in C:
```c
#include <tensorflow/lite/c/c_api.h>
#include <tensorflow/lite/delegates/external/external_delegate.h>

TfLiteExternalDelegateOptions opts = TfLiteExternalDelegateOptionsDefault("libQnnTFLiteDelegate.so");
TfLiteExternalDelegateOptionsInsert(&opts, "backend_type", "htp");

TFLiteDelegate* delegate = TfLiteExternalDelegateCreate(&opts);
```

Adding the delegate to the interpreter:
```c
TfLiteInterpreterModifyGraphWithDelegate(interpreter, delegate);
```
