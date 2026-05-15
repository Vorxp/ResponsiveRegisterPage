document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Validate passwords match
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    if (password !== confirmPassword) {
        document.getElementById('result').innerHTML = 'รหัสผ่านไม่ตรงกัน โปรดลองอีกครั้ง';
        return;
    }
    
    alert("คุณได้ลงทะเบียนเรียบร้อยแล้ว");
    document.getElementById("title").innerHTML = "ยินดีต้อนรับสู่เว็บไซต์ของเรา";
    this.reset();
});