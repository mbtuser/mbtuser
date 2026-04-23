import os
import sys

print("UFT Python smoke test running...")

out_file = os.path.join(os.path.dirname(__file__), "python_result.txt")

try:
    with open(out_file, "w", encoding="utf-8") as f:
        f.write("PASS")
    print("Test PASSED")
    sys.exit(0)
except Exception as e:
    print(f"Test FAILED: {e}")
    sys.exit(1)