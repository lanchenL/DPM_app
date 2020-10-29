import { USERApi } from './../../services/sdk/services/custom/USER';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public plant = 'zhongshan';
  public sites = [
    {
      label: '中山',
      value: 'zhongshan'
    },
    {
      label: '成都',
      value: 'chengdu'
    },
    {
      label: '重庆',
      value: 'chongqing'
    }
  ];
  public userId = '';
  public password = '';
  public isLoading = false;
  public data: any = [];

  constructor(
    public router: Router,
    private userApi: USERApi,
    private toastController: ToastController,
    private loadingController: LoadingController,
  ) { }

  ngOnInit() {
  }

  async login() {
    const requestParams = {
      userid: this.userId,
      password: this.password,
    };
    try {
      this.isLoading = true;
      const response = await this.userApi.login(requestParams).toPromise();
      console.log(response);
      this.data = response;
      if (response.message === 'OK') {
        const toast = await this.toastController.create({
          position: 'middle',
          message: '登录成功！',
          color: 'success',
          duration: 500,
        });
        toast.onDidDismiss().then(() => {
          this.router.navigate(['/home']);
        });
        toast.present();
      } else {
        const toast = await this.toastController.create({
          position: 'middle',
          message: '登录失败！',
          color: 'danger',
          duration: 2000,
        });
        toast.present();
      }
    } catch (error) {
      const toast = await this.toastController.create({
        position: 'middle',
        message: error.message,
        color: 'warning',
        duration: 2000,
      });
      toast.present();
      console.error(error);
    } finally {
      this.isLoading = false;
    }

  }

}
