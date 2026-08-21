# NexussOS

NexussOS is a foundational operating system project designed with a unique approach to integrating higher-level operating systems. It functions as a bare-metal bootloader and a minimal kernel, capable of initializing basic graphics and preparing the environment for a secondary OS.

## Key Features

*   **Bare-Metal Execution**: NexussOS runs directly on hardware, providing a low-level foundation.
*   **Framebuffer Initialization**: Sets up a graphical display, demonstrating basic visual output capabilities.
*   **Kexec-like Philosophy**: Employs a design philosophy similar to `kexec`, allowing it to load and transition control to another kernel (e.g., Linux) as an application, effectively enabling a multi-OS environment where NexussOS acts as a hypervisor or initial boot manager.
*   **Bootable ISO Generation**: The project includes a `Makefile` to compile the kernel and create a bootable ISO image using GRUB, making it easy to test and deploy on virtual machines or physical hardware.

## Project Structure

*   `src/`: Contains the core kernel source files (`kernel.c`, assembly files for boot and multiboot header, linker script).
*   `include/`: Header files for the kernel.
*   `iso/`: Directory for building the bootable ISO, including GRUB configuration.
*   `Makefile`: Build script for compiling the kernel and generating the `nexussos.iso`.

## Building and Running

To build NexussOS, navigate to the project root and run `make`:

```bash
make
```

This will generate `nexussos.iso`, which can then be run in a virtual machine (e.g., QEMU, VirtualBox) or written to a USB drive for booting on physical hardware.

## Contribution

Contributions are welcome! Please feel free to fork the repository, make improvements, and submit pull requests.

## License

This project is open-source and available under the [MIT License](LICENSE).
