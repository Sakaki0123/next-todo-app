'use server';

export const sampleAction = async (name: string) => {
    console.log('サーバーアクションが実行されました:', name);
};

export const createTask = async (taskId: number, formData: FormData) => {
    // DBにタスクを作成する
    console.log('タスクが作成されました');
    console.log('Task ID:', taskId);
    console.log(formData.get('name'));
}
